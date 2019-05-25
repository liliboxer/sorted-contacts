import Component from './Component.js';

class Sort extends Component {
    render() {
        const form = this.renderDOM();
    
        form.addEventListener('submit', event => event.preventDefault());

        form.addEventListener('input', () => {
            const formData = new FormData(form);
            const sortOptions = {
                property: formData.get('property'),
                direction: parseInt(formData.get('direction'))
            };

            this.props.onSort(sortOptions);
        });

        return form;
    }

    renderTemplate() {
        return /*html*/ `
            <form>
                <label>
                    Sort By:
                    <select name="property">
                        <option value="lastName">Last Name</option>
                        <option value="eyeColor">Eye Color</option>
                    </select>
                </label>
                    Direction:
                    <select name="direction">
                        <option value="1">Ascending</option>
                        <option value="-1">Descending</option>
                    </select>
                <label>
                </label>
            </form>
        `;
    }
}

export default Sort;