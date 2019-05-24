import Component from './Component.js';

class TableRow extends Component {
    renderTemplate() {
        return /*html*/ `
            <tr>
                <td>A</td>
            </tr>
        `;
    }
}

export default TableRow;