
import {app} from './app';
import dotenv from 'dotenv';
dotenv.config()
let PORT;
PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log('Server listening on port 3000');
})
