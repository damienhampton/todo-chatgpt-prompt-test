const Task = require('../models/Task');

exports.createTask = async (req, res) => {
    const { title, description, due_date, priority } = req.body;

    try {
        const task = await Task.create({
            title,
            description,
            due_date,
            priority,
            user_id: req.user.id,
        });

        res.status(201).json(task);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll({ where: { user_id: req.user.id } });
        res.json(tasks);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task || task.user_id !== req.user.id) {
            return res.status(404).json({ message: 'Task not found.' });
        }
        res.json(task);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.updateTask = async (req, res) => {
    const { title, description, due_date, priority } = req.body;

    try {
        const task = await Task.findByPk(req.params.id);
        if (!task || task.user_id !== req.user.id) {
            return res.status(404).json({ message: 'Task not found.' });
        }

        task.title = title || task.title;
        task.description = description || task.description;
        task.due_date = due_date || task.due_date;
        task.priority = priority || task.priority;

        await task.save();
        res.json(task);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task || task.user_id !== req.user.id) {
            return res.status(404).json({ message: 'Task not found.' });
        }

        await task.destroy();
        res.json({ message: 'Task deleted.' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};