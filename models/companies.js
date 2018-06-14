// companies.js
module.exports = function(sequelize, DataTypes) {
    var Company = sequelize.define("Company", {
      // ID will be provided automatically by Sequelize
      // Giving the Company model a name of type STRING
      co_name: {
        type: DataTypes.STRING
      },
      co_url: {
        type: DataTypes.STRING
      },
      co_email: {
        type: DataTypes.STRING
      },
      co_phone: {
        type: DataTypes.STRING
      },
      co_address: {
        type: DataTypes.STRING
      },
      co_city: {
        type: DataTypes.STRING
      },
      co_state: {
        type: DataTypes.STRING
      },
      priority: {
        type: DataTypes.STRING
      }


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
    // Company.associate = function(models) {Company.belongsToMany(models.Contact, { as: 'Contact', through: { model: CompanyContact, unique: false }, foreignKey: 'contactId' });}

    Company.associate = function(models) {
     // Associating Companies  with Job Openings
      // When an Author is deleted, also delete any associated Posts

      Company.hasMany(models.Contacts);
      Company.hasMany(models.JobOpening, {
        onDelete: "cascade"
      });
    };
    

    return Company;
  }; 