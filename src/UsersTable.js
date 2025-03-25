import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const UsersTable = ({ rows, selectedUser, deleteUser }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "600px",
        margin: "auto",
        mt: 4,
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <Table>
        <TableHead>
          <TableRow
            component={motion.tr}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            sx={{
              backgroundColor: "#00c6e6",
              "& th": { color: "#fff", fontWeight: "bold" },
            }}
          >
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <AnimatePresence>
            {rows.length > 0 ? (
              rows.map((row) => (
                <motion.tr
                  key={row.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <TableCell component="th" scope="row">{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>
                    <Button
                      sx={{
                        marginRight: "8px",
                        backgroundColor: "#4caf50",
                        color: "#fff",
                        "&:hover": { backgroundColor: "#388e3c" },
                      }}
                      onClick={() => selectedUser({ id: row.id, name: row.name })}
                    >
                      Update
                    </Button>
                    <Button
                      sx={{
                        backgroundColor: "#f44336",
                        color: "#fff",
                        "&:hover": { backgroundColor: "#d32f2f" },
                      }}
                      onClick={() => deleteUser({ id: row.id })}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </motion.tr>
              ))
            ) : (
              <motion.tr
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <TableCell colSpan={3} align="center">
                  No Data
                </TableCell>
              </motion.tr>
            )}
          </AnimatePresence>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
