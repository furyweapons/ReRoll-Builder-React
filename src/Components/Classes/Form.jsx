import React, {Component} from 'react';
import {InputField, CheckboxList} from '../Forms/Index';

class Form extends Component {
    render() {
        return (
            <div className="w-1/2 max-w-xs darker p-4">
                <form className="w-full max-w-lg">
                    <InputField propname="name" label="Class Name" placeholder="Barbarian" />
                    <InputField propname="hit_die" label="Hit Die" placeholder="12" />
                    <InputField propname="combat_resource" label="Combat Resource" placeholder="Rage" />
                    <InputField propname="spell_attack_ability" label="Spell Attack Ability" placeholder="INT" />
                    <InputField propname="skills_count_choose" label="Skills To Choose" placeholder="2" />
                    <CheckboxList propname="skills" label="Skills" items={['Acrobatics', 'Athletics']} />
                </form>
            </div>
        );
    }
}

export default Form;