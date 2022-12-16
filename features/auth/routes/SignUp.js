import { TextInput, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function SignUp() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChangeEmail = (val) => {
    console.log(val)
    setForm({ ...form, email: val });
  };

  const onChangePass = (val) => {
    setForm({ ...form, password: val });
  };

  const submit = () => {
    console.log(form);
    
  };
  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}
    >
      <Text>Email</Text>
      <TextInput onChangeText={onChangeEmail} placeholder="Email" />
      <Text style={{ marginTop: 100 }}>Password</Text>
      <TextInput onChangeText={onChangePass} placeholder="Password" />
      <TouchableOpacity onPress={submit} style={{marginTop: 100 }}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
