import Component from './Component.js';
import Header from './Header.js';
import Table from './Table.js';
import TableHead from './TableHead.js';
import TableRow from './TableRow.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const table = new Table();
        const tableDOM = table.render();

        const tableHead = new TableHead();
        const tableHeadDOM = tableHead.render();

        const tableRow = new TableRow();
        const tableRowDOM = tableRow.render();

        const main = dom.querySelector('main');
        
        dom.insertBefore(headerDOM, main);
        main.appendChild(tableDOM);
        tableDOM.appendChild(tableHeadDOM);
        tableDOM.appendChild(tableRowDOM);
        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                
                </main>
            </div>
        `;
    }
}

export default App;
