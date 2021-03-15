import React, { useState } from 'react';
import { ThemeProvider, createMuiTheme, Paper, Switch } from '@material-ui/core';
import styles from './App.css'

const darkTheme = createMuiTheme({ palette: { type: "dark" } })
const lightTheme = createMuiTheme({})


export default function App() {

   const [dark, setDark] = useState(true);
   const toggleTheme = () => setDark(!dark);

   return (
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
         <Paper style={{ minHeight: "100vh", borderRadius: 0 }} className={styles.mainContainer}>
            Hello
            <Switch size="small" color="secondary" onChange={toggleTheme} defaultChecked={dark} />

            <div
               style={{ fontFamily: "Fira Code" }}
            >
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus nulla velit eius soluta quaerat alias numquam ab rem qui quod sequi voluptates, tempore ea aperiam itaque. Nihil itaque ratione vel omnis quo, labore quas dolorem excepturi aspernatur veniam neque commodi quod maiores numquam hic laboriosam dolorum voluptatum vero sit recusandae?
            </div>
         </Paper>
      </ThemeProvider>
   )
}
