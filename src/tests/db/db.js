// db.js
import { openDatabase } from 'react-native-sqlite-storage'

const db = openDatabase('table_applications.db')
export default db;