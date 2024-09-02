module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add a new UUID column
    await queryInterface.addColumn('Users', 'uuid', {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    });

    // Optional: If you need to keep data and have a way to generate UUIDs from existing data, fill the new column.

    // Remove the old 'id' column
    await queryInterface.removeColumn('Users', 'id');

    // Rename the 'uuid' column to 'id'
    await queryInterface.renameColumn('Users', 'uuid', 'id');

    // Add 'id' as the primary key
    await queryInterface.changeColumn('Users', 'id', {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true
    });
  },
  down: async (queryInterface, Sequelize) => {
    // Reverse the process for the downgrade
    await queryInterface.addColumn('Users', 'new_id', {
      type: Sequelize.INTEGER,
      autoIncrement: true
    });

    // Optional: Transfer data back if necessary

    await queryInterface.removeColumn('Users', 'id');
    await queryInterface.renameColumn('Users', 'new_id', 'id');

    await queryInterface.changeColumn('Users', 'id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    });
  }
};

