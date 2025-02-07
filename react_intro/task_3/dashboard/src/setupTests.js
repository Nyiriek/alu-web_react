import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-17';

global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;

Enzyme.configure({ adapter: new Adapter() });