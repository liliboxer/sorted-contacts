import Component from './Component.js';
import Header from './Header.js';
import Table from './Table.js';
import contacts from '../js/contacts-data.js';
import Sort from './Sort.js';
import sortContacts from '../js/sorts-contacts.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);
        
        const sort = new Sort({
            onSort: sortOptions => {
                const sorted = sortContacts(contacts, sortOptions);
                table.update({ contacts: sorted });
            }
        });

        main.appendChild(sort.render());
        const table = new Table({ contacts });
        const tableDOM = table.render();

        main.appendChild(tableDOM);
        
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
