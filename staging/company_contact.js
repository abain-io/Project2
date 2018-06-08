// company_contact.js to create the intermedieate table which will enable  
// many-to-many association between a company and contact(s) 

module.exports = function (sequelize, DataTypes) {
    var CompanyContact = sequelize.define("CompanyContact", {
        companyId: {
            type: DataTypes.STRING
        },
        contactId: {
            type: DataTypes.STRING
        }
    });
    // Company.belongsToMany(Contact, { as: 'Contact', through: { model: CompanyContact, unique: false }, foreignKey: 'contactId' });
    // Contact.belongsToMany(Company, { as: 'Company', through: { model: CompanyContact, unique: false }, foreignKey: 'companyId' });

    return CompanyContact;
};
