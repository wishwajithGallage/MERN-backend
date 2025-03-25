import { Button, Grid, Input, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const UserForm = ({ addUser, updateUser, submitted, data, isEdit }) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    if (!submitted) {
      setId(0);
      setName("");
    }
  }, [submitted]);

  useEffect(() => {
    if (data?.id && data.id !== 0) {
      setId(data.id);
      setName(data.name);
    }
  }, [data]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "#ffffff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          width: "400px",
          margin: "auto",
          mt: 5,
        }}
      >
        <Grid item xs={12}>
          <Typography
            component={motion.h1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            sx={{
              color: "#333",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "24px",
            }}
          >
            User Form
          </Typography>
        </Grid>

        {/* ID Input Field */}
        <Grid item xs={12}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography component={"label"} htmlFor="id" sx={{ color: "#555", fontSize: "16px", mb: 1 }}>
              ID
            </Typography>
            <motion.div whileFocus={{ scale: 1.02 }} whileHover={{ scale: 1.02 }}>
              <Input
                type="number"
                id="id"
                name="id"
                fullWidth
                sx={{ padding: "8px", border: "1px solid #ddd", borderRadius: "5px" }}
                value={id}
                onChange={(e) => setId(e.target.value)}
                autoFocus
              />
            </motion.div>
          </Box>
        </Grid>

        {/* Name Input Field */}
        <Grid item xs={12}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography component={"label"} htmlFor="name" sx={{ color: "#555", fontSize: "16px", mb: 1 }}>
              Name
            </Typography>
            <motion.div whileFocus={{ scale: 1.02 }} whileHover={{ scale: 1.02 }}>
              <Input
                type="text"
                id="name"
                name="name"
                fullWidth
                sx={{ padding: "8px", border: "1px solid #ddd", borderRadius: "5px" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </motion.div>
          </Box>
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12} sx={{ textAlign: "center", mt: 2 }}>
          <motion.div whileTap={{ scale: 0.95 }}>
            <Button
              sx={{
                padding: "10px 20px",
                backgroundColor: "#00c6e6",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "bold",
                borderRadius: "8px",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#009bb3",
                },
              }}
              onClick={() => (isEdit ? updateUser({ id, name }) : addUser({ id, name }))}
            >
              {isEdit ? "Update" : "Add"}
            </Button>
          </motion.div>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default UserForm;
