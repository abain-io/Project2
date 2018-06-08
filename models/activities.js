// activities.js to create activities table, which contains action items 
// which will be associated with specific job openings
module.exports = function(sequelize, DataTypes){
    var actionItem = sequelize.define("actionItem", {
        action_item: {
            type: DataTypes.STRING
        },
        resume_file_submitted: {
            type:DataTypes.STRING
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
    actionItem.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        actionItem.belongsTo(models.job_opening, {
          //onDelete: "cascade"
        });
      };
    return actionItem;
};