/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';
import {
  Car,
  Circle,
  Email,
  Eye,
  Fb,
  Google,
  Chotacircle,
  Password,
  Twitter,
  Userimage,
  Uncheck,
  Check,
} from '../svg';
import Color from '../Ui/color';
const SignupPage = () => {
  const [check, setCheck] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const handleSignUp = () => {
    if (!check) {
      Alert.alert('Please agree to the terms and conditions');
      return;
    }
    if (!userName || !email || !password || !confirmPassword) {
      Alert.alert('Please fill out all fields');
      return;
    }
    if (!isValidEmail(email)) {
      Alert.alert('Invalid email');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Confirm Password do not match');
      return;
    }

    const passwordRegex =
      /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~])(?=.*[0-9])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      Alert.alert(
        'Invalid password',
        'Password must have at least one special character, a number, an uppercase alphabet, and be at least 8 characters long.',
      );
      return;
    }

    setSuccessModalVisible(true);
  };
  const isValidEmail = () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSuccessPopupClose = () => {
    setSuccessModalVisible(false);
  };
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
          <View style={{marginRight: -150, marginTop: -55}}>
            <Circle />
          </View>
          <View>
            <Car style={{right: 10, top: 6}} />
          </View>
        </View>
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.signUp}>SignUp</Text>
            <Text style={styles.carDetail}>Get Your Car Sparkling Clean</Text>
            <View style={styles.input}>
              <Userimage />
              <TextInput
                placeholder="Username"
                style={styles.textInput}
                onChangeText={setUserName}
                value={userName}
              />
            </View>
            <View style={styles.input}>
              <Email />
              <TextInput
                placeholder="Email"
                style={styles.textInput}
                onChangeText={setEmail}
                value={email}
              />
            </View>
            <View style={styles.input}>
              <Password />
              <TextInput
                secureTextEntry={!showPassword}
                placeholder="Password"
                style={styles.textInput}
                onChangeText={setPassword}
                value={password}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}>
                <Eye />
              </TouchableOpacity>
            </View>
            <View style={styles.input}>
              <Password />
              <TextInput
                secureTextEntry={!showPassword1}
                placeholder="Confirm Password"
                style={styles.textInput}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowPassword1(!showPassword1)}>
                <Eye />
              </TouchableOpacity>
            </View>
            <View style={styles.checkBox}>
              <TouchableOpacity
                style={styles.check}
                onPress={() => setCheck(!check)}>
                {check ? (
                  <Check style={styles.checkIcon} />
                ) : (
                  <Uncheck style={styles.checkIcon} />
                )}
              </TouchableOpacity>
              <Text style={styles.textcolor}>
                I Agree to the Terms and Conditions, Privacy Policy & Medical
                Disclaimer
              </Text>
            </View>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: 'White',
              }}
            />
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={handleSignUp}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.lineContainer}>
              <View style={styles.line} />
            </View>
            <View style={styles.or}>
              <Text style={styles.orText}>OR</Text>
            </View>

            <View style={styles.socialIconsRow}>
              <View style={styles.socialIcon}>
                <Chotacircle />
                <Fb style={styles.socialImage} />
              </View>
              <View style={styles.socialIcon}>
                <Chotacircle />
                <Google style={styles.socialImage} />
              </View>
              <View style={styles.socialIcon}>
                <Chotacircle />
                <Twitter style={styles.socialImage} />
              </View>
            </View>
          </ScrollView>
          <Modal
            animationType="slide"
            transparent={true}
            visible={successModalVisible}
            onRequestClose={handleSuccessPopupClose}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.successMessage}>
                  Registration Successful ✅
                </Text>
                <Text style={styles.userInfo}>User Name: {userName}</Text>
                <Text style={styles.userInfo}>Email: {email}</Text>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={handleSuccessPopupClose}>
                  <Text style={styles.modalButtonText}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  successMessage: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'green',
  },
  userInfo: {
    fontSize: 16,
    marginBottom: 8,
  },
  modalButton: {
    backgroundColor: 'green',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  successPopup: {
    position: 'absolute',
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignSelf: 'center',
    top: '40%',
    elevation: 5,
  },
  successPopupText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  successPopupButton: {
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  successPopupButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  socialIconsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  socialIcon: {
    alignItems: 'center',
    padding: 30,
    bottom: 15,
  },
  socialImage: {
    bottom: 32,
  },
  eyeIcon: {
    position: 'absolute',
    right: '6%',
    top: '50%',
  },
  lineContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    width: '80%',
    height: 1,
    backgroundColor: Color.White,
  },
  buttonContainer: {
    backgroundColor: Color.White,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Color.Purple,
    paddingVertical: 10,
    alignItems: 'center',
    marginHorizontal: 80,
  },
  buttonText: {
    color: Color.Jamni,
    fontSize: 18,
    fontWeight: 'bold',
    margin: 'auto',
  },
  textcolor: {
    color: Color.White,
    fontSize: 14,
    fontFamily: 'Montserrat',
    fontWeight: '500',
    lineHeight: 20,
  },
  container: {
    flex: 3.5,
    backgroundColor: Color.Pink,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  signUp: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 36,
    fontWeight: '800',
    fontFamily: 'Montserrat',
    color: Color.White,
  },
  carDetail: {
    textAlign: 'center',
    marginTop: 10,
    color: Color.White,
    fontSize: 16,
    fontFamily: 'Mukta Vaani',
    fontWeight: '500',
    letterSpacing: 0.64,
  },
  input: {
    marginTop: 27,
    flexDirection: 'row',
    height: 47,
    marginHorizontal: 41,
    backgroundColor: Color.White,
    padding: 10,
    paddingRight: 40,
    borderRadius: 20,
  },
  textInput: {
    paddingLeft: 20,
    width: '85%',
  },
  checkBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 74,
    marginTop: 15,
  },
  check: {
    marginRight: 10,
  },
  checkIcon: {
    width: 20,
    height: 20,
    bottom: 5,
    right: 5,
  },
  orText: {
    color: Color.White,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Poppins',
    bottom: 10,
  },
});
export default SignupPage;
