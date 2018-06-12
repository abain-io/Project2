// companies.js
module.exports = function(sequelize, DataTypes){
    var Company = sequelize.define("Company", {
      // ID will be provided automatically by Sequelize
      // Giving the Company a name of type STRING
        coName: {
          type: DataTypes.STRING
        },
        coJobsUrl: {
          type: DataTypes.STRING
        },
        coPriority: {
          type: DataTypes.INTEGER
        }
        // createdAt: {
        //       type: DataTypes.DATE, 
        //   }
        // updatedAt: {
        //     Type: DataTypes.DATE, 
        //   }
    });
    Company.associate = function(models) {
      Company.hasMany(models.Contacts, {
        onDelete: "cascade"
      });
    };
    
    return Company;
  }; 

  //   },
      // createdAt: {
      //     type: DataTypes.DATE, 
      //     default: CURRENT_TIMESTAMP
      // }
      //updatedAt: {
        //Type: Sequelize.DATE, default: CURRENT_TIMESTAMP
      //}

    // Contact.belongsToMany(Company, {through: CompanyContact }); 
    
    // Author.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    // Author.hasMany(models.Post, {
    // onDelete: "cascade"
    //   });
    // };
    // Company.associate = function(models) {Company.belongsToMany(models.Contact, { as: 'Contact', through: { // model: CompanyContact, unique: false }, foreignKey: 'contactId' });}

     // As of Friday, we decided to create a 1:many between company and contact
    // and a 1:many between company and job openings

    // The following is how we associated (joined) Author to Posts in blogger app, just for our info
    // We will be creating a companyContact model and then using something like: