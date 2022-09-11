'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Section: {
        type: Sequelize.STRING
      },
      No_Mesin: {
        type: Sequelize.INTEGER
      },
      Nama_Mesin: {
        type: Sequelize.STRING
      },
      Tindakan_Perbaikan: {
        type: Sequelize.STRING
      },
      Catatan: {
        type: Sequelize.STRING
      },
      Gejala_Kerusakan: {
        type: Sequelize.STRING
      },
      Bagian: {
        type: Sequelize.STRING
      },
      Problem: {
        type: Sequelize.STRING
      },
      Penyebab: {
        type: Sequelize.STRING
      },
      Jenis_Perbaikan: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      part: {
        type: Sequelize.STRING
      },
      Running_Hours: {
        type: Sequelize.INTEGER
      },
      Durasi: {
        type: Sequelize.INTEGER
      },
      subBagian: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('data');
  }
};