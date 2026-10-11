let tasks = [
  { id: 1, title: 'Complete AWDF Practical Reports', ownerId: '1', completed: false },
  { id: 2, title: 'Verify JWT Middleware Security Flow', ownerId: '1', completed: true }
];

exports.getTasks = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Protected task list retrieved successfully',
    requestedBy: req.user.email,
    tasks
  });
};

exports.createTask = (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ success: false, message: 'Task title is required' });
  }
  const newTask = {
    id: Date.now(),
    title,
    ownerId: req.user.id,
    completed: false
  };
  tasks.push(newTask);
  res.status(201).json({
    success: true,
    message: 'Protected task created successfully',
    task: newTask
  });
};