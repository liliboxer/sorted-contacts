import Component from './Component.js';

class TableHead extends Component {
    renderTemplate() {
        return /*html*/ `
            <tr>
                <th>1</th>
                <th>2</th>
            </tr>
        `;
    }
}

export default TableHead;