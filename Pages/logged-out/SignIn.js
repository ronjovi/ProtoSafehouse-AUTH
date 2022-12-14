import { View, Text, TouchableOpacity } from "react-native";
import { useAppDispatch } from "../../store/hook";
import { setUser } from "../../store/userSession";
import { useState } from "react";

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  const signIn = () => {
    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
        // set in our store
        dispatch(setUser({ ...user}));
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });



  };
  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}
    >
      <Text>Hey i am not signed in</Text>

      <TouchableOpacity
        onPress={signIn}
        style={{ backgroundColor: "red", marginTop: 50 }}
      >
        <Text>{isLoading ? "loading" : "log in"}</Text>
      </TouchableOpacity>
    </View>
  );
}
