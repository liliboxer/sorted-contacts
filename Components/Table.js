import Component from './Component.js';
import TableRow from './TableRow.js';

class Table extends Component {
    render() {
        const contactList = this.renderDOM();
        const contacts = this.props.contacts;

        contacts.forEach (contact => {
            const tableRowContact = new TableRow({ contact });
            const tableRowContactDOM = tableRowContact.render();
            contactList.appendChild(tableRowContactDOM);
        });

        return contactList;
    }

    renderTemplate() {
        return /*html*/ `
            <table id="contact-table">
                <tr class="table-head">
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Company</th>
                    <th>Eye Color</th>
                    <th>Age</th>
                    <th>Favorite Fruit</th>
                </tr>
            </table>
        `;
    }
}

export default Table;