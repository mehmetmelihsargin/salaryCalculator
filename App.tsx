import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  View,
  Text,
  Button,
} from 'react-native';

function App(): JSX.Element {
  const [money, setMoney] = useState('');
  const [dailyAmount, setDailyAmount] = useState('');

  const dailySpending = (mny: number) => {
    const today = new Date();
    const lastDayOfMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0,
    );
    const remainingDays = lastDayOfMonth.getDate() - today.getDate() + 1;
    const calculatedDailyAmount = mny / remainingDays;
    setDailyAmount(calculatedDailyAmount.toFixed(2));
  };

  const handleChange = (value: string) => {
    setMoney(value);
  };

  const handleSubmit = () => {
    setDailyAmount('');
    dailySpending(Number(money));
    setMoney('');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{marginTop: 8, paddingHorizontal: 16}}>
          <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>
            PARA MİKTARINI GİRİNİZ
          </Text>
          <Text style={{fontSize: 16, textAlign: 'center'}}>
            Günlük harcayabileceğiniz miktarı hesaplayabilmek için elinizde
            kalan miktarı giriniz.
          </Text>
          <View style={{marginTop: 16, alignItems: 'center'}}>
            <TextInput
              style={{
                borderWidth: 4,
                borderColor: '#3182CE',
                borderRadius: 12,
                fontSize: 24,
                padding: 16,
                width: '75%',
              }}
              placeholder="Miktar Giriniz"
              onChangeText={handleChange}
              value={money}
              keyboardType="numeric"
            />
          </View>
          <View style={{marginTop: 16}}>
            <Button title="Hesapla" onPress={() => handleSubmit()} />
          </View>
          <View style={{marginTop: 16}}>
            <Text style={{fontSize: 20}}>
              {dailyAmount ? `Günlük harcama miktarınız: ${dailyAmount}` : ''}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
