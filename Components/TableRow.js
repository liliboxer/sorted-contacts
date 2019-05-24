import Component from './Component.js';

class TableRow extends Component {
    renderTemplate() {
        return /*html*/ `
            <tr>
                <td>A</td>
                <td>B</td>
                <td>C</td>
            </tr>
        `;
    }
}

export default TableRow;