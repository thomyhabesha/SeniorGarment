// server.js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require('./Routes/UserRoutes');
const GetuserRoutes = require('./Routes/getUserRoute');
const CreateUserRoute = require('./Routes/CreateUserRoute');
const settingsRoute = require('./Routes/settingsRoute');
const updateuserRoute = require('./Routes/updateuserRoute');
const taskRoutes = require('./Routes/Taskroute');
const ProductionRoute = require('./Routes/ProductionRoute');
const ProdutionScheduleUpdateRout = require('./Routes/ProdutionScheduleUpdateRout');
const ProductionScheduleCreateRoute = require('./Routes/ProductionScheduleCreateRoute');
const WorkflowRoute = require('./Routes/WorkflowRoute');
const cors = require('cors');
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors()); // This allows cross-origin requests from any origin

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', userRoutes);
app.use('/api', GetuserRoutes); 
app.use('/api', CreateUserRoute); 
app.use('/api', updateuserRoute); 
app.use('/api', settingsRoute); 
app.use('/api', taskRoutes); 
app.use('/api', ProductionRoute); 
app.use('/api', ProdutionScheduleUpdateRout); 
app.use('/api', ProductionScheduleCreateRoute); 
app.use('/api', WorkflowRoute); 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
