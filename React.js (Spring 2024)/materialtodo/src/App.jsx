import { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';

import Tooltip from '@mui/material/Tooltip';
import SaveIcon from '@mui/icons-material/Save';
import { DataGrid } from '@mui/x-data-grid';

function App() {
  const [todo, setTodo] = useState({ description: '', date: '' });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  }

  const addTodo = () => {
    const newTodo = { ...todo, id: new Date() };
    setTodos([...todos, newTodo]);
  }

  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row));
  }

  const columns = [
    { field: 'description', headerName: 'Description', width: 200 },
    { field: 'date', headerName: 'Date', width: 200 },
  ];

  return (
    <>
      {/* <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box> */}

      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6">
            Todolist
          </Typography>

        </Toolbar>
      </AppBar>
      <Stack
        direction="row"
        spacing={2}
        mt={2}
        justifyContent="center"
        alignItems="center">
        <TextField
          variant="standard"
          label="Description"
          name="description"
          value={todo.description}
          onChange={inputChanged}
        />
        <TextField
          variant="standard"
          label="Date"
          name="date"
          value={todo.date}
          onChange={inputChanged}
        />
        <Button
          variant="outlined"
          startIcon={<SaveIcon />}
          onClick={addTodo}>
          Add
        </Button>
      </Stack>
      <br />
      
      <DataGrid rows={todos} columns={columns} getRowId={row => row.id} />
      {/* <table>
        <tbody>
          {
            todos.map((todo, index) =>
              <tr key={index}>
                <td>{todo.description}</td>
                <td>{todo.date}</td>
                <td>
                <Tooltip title="Delete todo">
                  <IconButton size="small" color="error" onClick={() => deleteTodo(index)}>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
                </td>
              </tr>)
          }
        </tbody>
      </table> */}


    </>
  );
}

export default App;