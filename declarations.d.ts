import { ExpressionKind, NodeFlags } from "./src/enums";

/**
 * Expression interface
 */
type Expression<TType> = TType &
	{
		/**
		 * Compiled, executable, expression
		 */
		compiled?: TType;

		/**
		 * TypeScript expression tree
		 */
		expression?: ExpressionNode;

		/**
		 * Context variables
		 */
		context?: { [key: string]: any };
	};

/**
 * Realtime expression type
 * @description Need distinguish behavior for compiled and runtime expressions. Maybe this will change - decorator can be used.
 */
type RuntimeExpression<TType> = Expression<TType>;

declare interface ExpressionNode {
	kind: ExpressionKind;
	flags: NodeFlags;
	// decorators?: Array<Decorator>;
	// modifiers?: ModifiersArray;
}

interface Window
{
	Expression: Expression<any>
}

declare module NodeJS
{
	interface Global
	{
		Expression: Expression<any>
		RealtimeExpression: RuntimeExpression<any>
	}
}
