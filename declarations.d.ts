/**
 * Expression interface
 */
type Expression<TType> =
	{
		/**
		 * Compiled, executable, expression
		 */
		compiled: TType;

		/**
		 * TypeScript expression tree
		 */
		expression;

		/**
		 * Context variables
		 */
		context: { [key: string]: any };
	};

interface Window
{
	Expression: Expression<any>
}

declare module NodeJS
{
	interface Global
	{
		Expression: Expression<any>
	}
}