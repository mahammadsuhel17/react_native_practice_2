//*** Concept Of Using Multiple State ***//

import React , {useState} from 'react';
import {
    View,Text
}from 'react-native';
import AddColorDetails from '../Components/AddColorDetails';


const COLOR_INCREMENT = 15;

const AddColorScreen =()=>{
    const [addRed , setaddRed] =  useState(0);
    const [addGreen , setGreen] =  useState(0);
    const [addBlue , setaddBlue] =  useState(0);

return(

<View>
<AddColorDetails
onIncrease={() => setaddRed(addRed + COLOR_INCREMENT)}
onDecrease={() => setaddRed(addRed - COLOR_INCREMENT)}
color="Red"
/>

<AddColorDetails
onIncrease={() =>setGreen(addGreen + COLOR_INCREMENT)}
onDecrease={() => setGreen(addGreen - COLOR_INCREMENT)}
color="Green"
/>

<AddColorDetails
color="Blue"
onIncrease={() => setaddBlue(addBlue + COLOR_INCREMENT)}
onDecrease={() => setaddBlue(addBlue - COLOR_INCREMENT)}

/>

<View 
style={{
    marginTop:20,
    marginLeft:100,
    height:150,
    width:150,
    backgroundColor:`rgb(${addRed},${addGreen},${addBlue})`
}}

/>
</View>


)


};


export default AddColorScreen; 