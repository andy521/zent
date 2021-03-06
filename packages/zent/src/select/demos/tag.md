---
order: 13
zh-CN:
	title: 标签多选
	pla: 请选择
en-US:
	title: Multiple Select with Tag
	pla: Select options
---

```js
import { Select, Button, Notify } from 'zent';

class TagsDemo extends Component {

	state = {
		selected: ["1"],
		data: [
			{ value: '1', text: 'Option 1' },
			{ value: '2', text: 'Option 2' },
			{ value: '3', text: 'Option 3' },
		]
	};

	reset = () => {
		this.setState({
			selected: []
		});
	};

	upgradeData = () => {
		this.setState({
			data: [
				{ value: '1', text: 'Option 1' },
				{ value: '2', text: 'Option 2' },
				{ value: '3', text: 'Option 3' },
				{ value: '4', text: 'Option 4' }
			]
		});
	};

	increaseHandler = (event, item) => {
		this.setState({
			value: this.state.selected.push(item.value)
		});
		Notify.success(<span>The value of new added option was {item.value}.</span>);
	}

	deleteHandler = (item) => {

		// 可以使用效率更高或者更优雅的数组定点删除方法，比如 lodash.remove
		const newSelected = this.state.selected.filter(value => {
			return value !== item.value;
		});
		this.setState({
			selected: newSelected
		});
		Notify.success(<span>The value of new deleted option was {item.value}.</span>);
	}

	render() {
		return (
			<div>
				<span>External State: {this.state.selected.join(',')}</span>
					<br />
					<br />
				<Select
					placeholder="{i18n.pla}"
					data={this.state.data}
					onChange={this.increaseHandler}
					onDelete={this.deleteHandler}
					className="zent-custom-select"
					tags
    			filter={(item, keyword) => item.text.indexOf(keyword) > -1}
					value={this.state.selected} />
				<Button onClick={this.reset}>Reset</Button>
				<Button onClick={this.upgradeData}>Refill Data</Button>
			</div>
		);
	}
}

ReactDOM.render(
  <TagsDemo />
  , mountNode
);
```

<style>
.zent-custom-select {
	min-height: 30px;
}
</style>
