import {h, Component} from 'preact'

export default class Introduction extends Component {
    shouldComponentUpdate() {
        return false
    }

    render() {
        return <section id="introduction">
            <h1>Chinese Token Counter</h1>

            <p>{[
                'This is a tool that can count Chinese words (not characters, which everything can do!). It uses the tool developed by ',
                <a href="https://github.com/yishn/chinese-tokenizer">chinese-tokenizer</a>,
                ' and the dictionary ',
                <a href="https://cc-cedict.org/">CC-CEDICT</a>,
                '.'
            ]}</p>

            <p>Just paste your text down below:</p>
        </section>
    }
}
