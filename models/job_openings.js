// job_openings.js to create the table which will hold job openings and be 
// associated with a company in the companies table

module.exports = function(sequelize, DataTypes){
    var JobOpening = sequelize.define("JobOpening", {
        jobPostingId: {
            type: DataTypes.STRING
        },
        jobTitle: {
            type: DataTypes.STRING
        },
        co_Id: {
            type: DataTypes.INTEGER
        }, 
        jobNeighborhood: {
            type: DataTypes.STRING
        },
        jobPriority: {
            type: DataTypes.INTEGER
        }, 
        resume_file_submitted: {
            type:DataTypes.STRING
        },
        jobPostingSource: {
            type: DataTypes.STRING
        }
        
        //need to include employer ID and Job ID.  get from other tables joins and 
        //insert into Contacts (employerID, value)
        //values ( ( select id from empTalble where employer = 'company name'), )
    });
    JobOpening.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        JobOpening.belongsTo(models.Company, {
          // onDelete: "cascade" // do I need this??? **************************
        });
      };
    return JobOpening;
};