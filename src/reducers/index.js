import {combineReducers} from 'redux'
import { authReducer as auth } from '../components/utils/OAuth2'

//import counterReducer from './counterReducer'
import categoria from './categoria-reducer'
import habitacion from './habitacion-reducer'
import person from './person-reducer'
//import ecomm from './ecommReducer'
import themeReducer from './appLayoutReducer'


var reducers = combineReducers({
  auth: auth,
   // counter: counterReducer,
  categoria: categoria,
  habitacion: habitacion,
  person: person,
  //  ecomm: ecomm,
  theme:themeReducer,

});

export default reducers;