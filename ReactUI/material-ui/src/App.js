import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/button'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { orange, green } from '@material-ui/core/colors';
import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'


// ボタンのスタイル開始
///////////////////////////////////
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border : 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '0 30px'
  }
  })



function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>スタイルボタン</Button>
}
///////////////////////////////////
// ボタンのスタイル終了

// Themeの色をセットする開始
///////////////////////////////////
const theme = createMuiTheme({
  palette : {
    primary : {
      main : green[500],
    },
    secondary: {
      main: orange[500],
    }

  }
})
///////////////////////////////////
// Themeの色をセットする終了

// チェックボックス開始
///////////////////////////////////
function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel
    control={<Checkbox 
    checked={checked}
    onChange={(e) => setChecked(e.target.checked)}
    inputProps={{'aria-label' : 'secondary checkbox'}}/>}
    label="チェックボックスのお試し"
   /> 
  )
}
///////////////////////////////////
// チェックボックス終了

// 入力ボディー開始
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
    <div className="App">
      <header className="App-header">
        <AppBar color ="secondary">
          <Toolbar>
            <IconButton>
              <Typography variant = "h6">
                UPCOLOR
              </Typography>
              <Button>
                ログイン
              </Button>
            </IconButton>
          </Toolbar>
        </AppBar>

        
        <Typography variant="h2" component ="div">
          Welcome ようこそ
        </Typography>

        <Typography variant="h1">
          Material UI 楽しい
        </Typography>
        <br></br>

        <ButtonStyled />
        <TextField type ="text" color="secondary" label = "入力"/>
        <br></br>
        <TextField variant="outlined" color="secondary" type="date" label = "日にち"/>
        <br></br>
        <TextField variant="outlined" color="secondary" type="time" label = "時間"/>
        <br></br>
        <CheckboxExample />
        <br></br>
        <ButtonGroup>
      <Button 
      onClick={()=>alert('hello')} herf = "#" variant ="contained" color="primary"size ="large"
      style={{
        fontSize: 15
      }}
      endIcon={<SaveIcon />}w
      >
          保存
        </Button>
        <Button onClick={()=>alert('hello')} herf = "#" variant ="contained" color="secondary" size ="large"
      style={{
        fontSize: 15
      }}
      endIcon={<DeleteIcon />}
      >
          削除
        </Button>
        </ButtonGroup>
        <br></br>

        <Grid container spacing = {3} justify ="center">
          <Grid item>
            <Paper style={{height: 75, width: 50, }} />
          </Grid>
          <Grid item>
            <Paper style={{height: 75, width: 50, }} />
          </Grid>
          <Grid item>
            <Paper style={{height: 75, width: 50, }} />
          </Grid>
        </Grid>
        <img src={ logo } className="App-logo" alt ="logo" />
        
      </header>
    </div>
    </Container>
    </ThemeProvider>
  );
}
// 入力ボディー終了

export default App;
