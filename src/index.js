import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';

registerBlockType('blocks/data-store-demo', {
	edit: Edit,
	save,
});
