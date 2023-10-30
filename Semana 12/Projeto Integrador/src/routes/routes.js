import { createStackNavigator } from '@react-navigation/stack'

import Profile from '../pages/Profile/profile'
import SignIn from '../pages/SignIn/signin'
import Home from '../pages/Home/home'
import Register from '../pages/Register/register'
import Inscricao from '../pages/Inscricao/inscricao'
import Formulario from '../pages/Formulario/formulario'
import Localizacao from '../pages/Locatizacao/localizacao'
import ChangePhoto from '../pages/ChangePhoto/changephoto'

const Stack = createStackNavigator() 

export default function Routes() {
    return (
        <Stack.Navigator>
            
            <Stack.Screen 
             name="SignIn" 
             component={SignIn} 
             options={{ headerShown: false }}
            />

            <Stack.Screen 
             name="Home" 
             component={Home} 
             options={{ headerShown: false }}
             
            />

            <Stack.Screen 
             name="Register" 
             component={Register} 
             options={{ headerShown: false }}
             
            />

            <Stack.Screen 
             name="Inscricao" 
             component={Inscricao} 
             options={{ headerShown: false }}
            />

            <Stack.Screen 
             name="Formulario" 
             component={Formulario} 
             options={{ headerShown: false }}
            />

            <Stack.Screen 
             name="Profile" 
             component={Profile} 
             options={{ headerShown: false }}
            />

            <Stack.Screen 
             name="Localizacao" 
             component={Localizacao} 
             options={{ headerShown: false }}
            />

            <Stack.Screen 
             name="ChangePhoto" 
             component={ChangePhoto} 
             options={{ headerShown: false }}
            />
            
            
        </Stack.Navigator>
    )
}
