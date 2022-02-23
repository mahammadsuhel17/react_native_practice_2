import React from 'react';
import {
    View, Text, TextInput, StyleSheet
} from 'react-native';


const TextBox1 = ({ label,handleChange }) => {
    return (
        <View style={styles.textBoxContainer}>
            <TextInput
            onChange={()=>{handleChange(e)}}
                style={styles.textBox}
            />
             <Text style={styles.label}>{label} </Text>
            
        </View>
    )
};

const styles = StyleSheet.create({
    textBox: {
        marginLeft: 20
    },
    textBoxContainer: {
        height: 40,
        minWidth: '80%',
        borderWidth: 1,
        borderColor: '#606060',
        borderRadius: 20,
        marginBottom:30,

    },
    label: {
        color: 'black',
        backgroundColor: 'white',
        position: "absolute", 
        marginLeft:25,
        marginBottom:20,
        bottom:10,
        paddingLeft:5,
        paddingRight:5
        
    }
})

export default TextBox1;






// const [form, setForm] = useState({});
// const {navigate} = useNavigation();
// const [errors, setErrors] = useState({});
// const {
//   authDispatch,
//   authState: {error, loading, data},
// } = useContext(GlobalContext);

// useFocusEffect(
//   React.useCallback(() => {
//     return () => {
//       if (data || error) {
//         clearAuthState()(authDispatch);
//       }
//     };
//   }, [data, error]),
// );

// const onChange = ({name, value}) => {
//   setForm({...form, [name]: value});

//   if (value !== '') {
//     if (name === 'password') {
//       if (value.length < 6) {
//         setErrors((prev) => {
//           return {...prev, [name]: 'This field needs min 6 characters'};
//         });
//       } else {
//         setErrors((prev) => {
//           return {...prev, [name]: null};
//         });
//       }
//     } else {
//       setErrors((prev) => {
//         return {...prev, [name]: null};
//       });
//     }
//   } else {
//     setErrors((prev) => {
//       return {...prev, [name]: 'This field is required'};
//     });
//   }
// };

// const onSubmit = () => {
//   if (!form.userName) {
//     setErrors((prev) => {
//       return {...prev, userName: 'Please add a username'};
//     });
//   }
//   if (!form.firstName) {
//     setErrors((prev) => {
//       return {...prev, firstName: 'Please add a  first name'};
//     });
//   }
//   if (!form.lastName) {
//     setErrors((prev) => {
//       return {...prev, lastName: 'Please add a last name'};
//     });
//   }
//   if (!form.email) {
//     setErrors((prev) => {
//       return {...prev, email: 'Please add a email'};
//     });
//   }
//   if (!form.password) {
//     setErrors((prev) => {
//       return {...prev, password: 'Please add a password'};
//     });
//   }

//   if (
//     Object.values(form).length === 5 &&
//     Object.values(form).every((item) => item.trim().length > 0) &&
//     Object.values(errors).every((item) => !item)
//   ) {
//     register(form)(authDispatch)((response) => {
//       navigate(LOGIN, {data: response});
//     });
//   }
// };

// return (
//   <RegisterComponent
//     onSubmit={onSubmit}
//     onChange={onChange}
//     form={form}
//     errors={errors}
//     error={error}
//     loading={loading}
//   />
// );
// };