import '@testing-library/jest-dom/extend-expect';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

const adapter = new Adapter()

Enzyme.configure({ adapter });

