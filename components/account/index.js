// @flow
import * as React from 'react'
import Account from './styles'

const Data = [
	{
		id: 1,
		name: 'Natalia',
		email: 'natalia@zopa.com',
		amount: '£1,500.00'
	},
	{
		id: 2,
		name: 'Thomas',
		email: 'thomas@zopa.com',
		amount: '£1,000.00'
	},
	{
		id: 3,
		name: 'Martin',
		email: 'martin@zopa.com',
		amount: '£2,000.00'
	}
]

const Item = ({ name, email, amount }: { [x: string]: string }) => (
	<div>
		<div style={{ float: 'left' }}>
			<Account.ItemName>{name}</Account.ItemName>
			<Account.ItemEmail marginBottom={5}>{email}</Account.ItemEmail>
		</div>
		<Account.ItemAmount>{amount}</Account.ItemAmount>
		<Account.Hr />
	</div>
)

const Sent = ({
	amount,
	text,
	alignRight
}: {
	amount: string,
	text: string,
	alignRight: boolean
}) => (
	<Account.InfoCol>
		<Account.SentAmount>{amount}</Account.SentAmount>
		<Account.SpendText alignRight={alignRight}>{text}</Account.SpendText>
	</Account.InfoCol>
)

export default () => (
	<div>
		<Account.Wrapper>
			<Sent amount="£4, 500.00" text="total sent" alignRight={true} />

			<Account.Graph />

			<Sent amount="£13,500.000" text="left available" alignRight={true} />
		</Account.Wrapper>

		<Account.SubTitle>Transactions</Account.SubTitle>
		{Data.map(i => <Item key={i.id} {...i} />)}
	</div>
)
