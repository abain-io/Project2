// companies.js
module.exports = function(sequelize, DataTypes) {
    var Company = sequelize.define("Company", {
      // ID will be provided automatically by Sequelize
      // Giving the Company model a name of type STRING
      coName: DataTypes.STRING,
      coJobsUrl: DataTypes.STRING,

      coPriority: DataTypes.INTEGER


    });
    // The following is how we associated (joined) Author to Posts in blogger app, just for our info
    // We will be creating a companyContact model and then using something like:

    // Company.belongsToMany(Contact, {through: CompanyContact });
    // Contact.belongsToMany(Company, {through: CompanyContact }); 
    
    // Author.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    // Author.hasMany(models.Post, {
    // onDelete: "cascade"
    //   });
    // };
  
    return Company;
  };