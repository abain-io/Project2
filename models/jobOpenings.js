// job_openings.js to create the table which will hold job openings and be 
// associated with a company in the companies table

module.exports = function (sequelize, DataTypes) {
    var JobOpening = sequelize.define("JobOpening", {

        jobTitle: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
              }
        },
        co_name: {
            type: DataTypes.STRING
        },
        jobPost_url: {
            type: DataTypes.STRING
        },
        jobLocation: {
            type: DataTypes.STRING
        },
        jobPriority: {
            type: DataTypes.STRING
        },
        resume_file_submitted: {
            type: DataTypes.STRING
        },
        jobPostingSource: {
            type: DataTypes.STRING
        },
        skillsRequired: {
            type: DataTypes.STRING
        }

        //need to include employer ID and Job ID.  get from other tables joins and 
        //insert into Contacts (employerID, value)
        //values ( ( select id from empTalble where employer = 'company name'), )
    });
    // JobOpening.associate = function(models) {
    //     // Associating Author with Posts
    //     // When an Author is deleted, also delete any associated Posts
    //     JobOpening.belongsTo(models.Company, {
    //       // onDelete: "cascade" // do I need this??? **************************
    //     });
    //   };

    
//   JobOpening.associate = function(models) {
//     // We're saying that a Post should belong to an Author
//     // A Post can't be created without an Author due to the foreign key constraint
//     JobOpening.belongsTo(models.Company, {
//       foreignKey: {
//         allowNull: false
//       }
//     });
//   };
    return JobOpening;
};