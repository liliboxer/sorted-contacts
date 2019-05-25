import Component from './Component.js';

class TableRow extends Component {
    render() {
        const dom = this.renderDOM();
        return dom;
    }
    
    renderTemplate() {
        const contact = this.props.contact;
        return /*html*/ `
            <tr>
                <td>${contact.firstName}</td>
                <td>${contact.lastName}</td>
                <td>${contact.company}</td>
                <td>${contact.eyeColor}</td>
            </tr>
        `;
    }
}

export default TableRow;