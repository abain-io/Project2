// activities.js to create activities table, which contains action items 
// which will be associated with specific job openings
module.exports = function(sequelize, DataTypes){
    var ActionItem = sequelize.define("ActionItem", {
        action_item: {
            type: DataTypes.STRING
        },
        due_date: {
           type: DataTypes.DATE
        },
        completed_date: {
            type: DataTypes.DATE
        }
        //need to include employer ID and Job ID.  get from other tables joins and 
        //insert into Contacts (employerID, value)
        //values ( ( select id from empTalble where employer = 'company name'), )
    });
    ActionItem.associate = function(models) {
        // Associating ActionItem with job opening
        ActionItem.belongsTo(models.JobOpening, {
          //onDelete: "cascade"
        });
      };
    return ActionItem;
};