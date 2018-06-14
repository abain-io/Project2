module.exports = function(sequelize, DataTypes){
    var Contacts = sequelize.define("Contacts", {
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type:DataTypes.STRING
        },
        email: {
           type: DataTypes.STRING
        },
        phone_number: {
            type: DataTypes.STRING
        },
        work_phone: {
            type: DataTypes.STRING
        }
      
        //need to include employer ID and Job ID.  get from other tables joins and 
        //insert into Contacts (employerID, value)
        //values ( ( select id from empTalble where employer = 'company name'), )
    });
    Contacts.associate = function(models) {
        // Associating Contact with Company
        Contacts.belongsTo(models.Company, {
          // onDelete: "cascade"
        });
      };
    return Contacts;
};