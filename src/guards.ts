import * as nodes from "./nodes";
import {ExpressionKind} from "./enums";

/**
 * Type guard validation that expression is IdentifierExpressionNode
 * @param node
 */
export function isIdentifierExpression(node: ExpressionNode): node is nodes.IdentifierExpressionNode
{
	return node.kind == ExpressionKind.Identifier;
}

/**
 * Type guard validation that expression is ArrowFunctionExpressionNode
 * @param node
 */
export function isArrowFunctionExpression(node: ExpressionNode): node is nodes.ArrowFunctionExpressionNode
{
	return node.kind == ExpressionKind.ArrowFunction;
}

/**
 * Type guard validation that expression is ParameterExpressionNode
 * @param node
 */
export function isParameterExpression(node: ExpressionNode): node is nodes.ParameterExpressionNode
{
	return node.kind == ExpressionKind.Parameter;
}

/**
 * Type guard validation that expression is PropertyAccessExpressionNode
 * @param node
 */
export function isPropertyAccessExpression(node: ExpressionNode): node is nodes.PropertyAccessExpressionNode
{
	return node.kind == ExpressionKind.PropertyAccessExpression;
}

/**
 * Type guard validation that expression is ElementAccessExpressionNode
 * @param node
 */
export function isElementAccessExpression(node: ExpressionNode): node is nodes.ElementAccessExpressionNode
{
	return node.kind == ExpressionKind.ElementAccessExpression;
}

/**
 * Type guard validation that expression is NonNullExpressionNode
 * @param node
 */
export function isNonNullExpression(node: ExpressionNode): node is nodes.NonNullExpressionNode
{
	return node.kind == ExpressionKind.NonNullExpression;
}

/**
 * Type guard validation that expression is BinaryExpressionNode
 * @param node
 */
export function isBinaryExpression(node: ExpressionNode): node is nodes.BinaryExpressionNode
{
	return node.kind == ExpressionKind.BinaryExpression;
}

/**
 * Type guard validation that expression is PrefixUnaryExpressionNode
 * @param node
 */
export function isPrefixUnaryExpression(node: ExpressionNode): node is nodes.PrefixUnaryExpressionNode
{
	return node.kind == ExpressionKind.PrefixUnaryExpression;
}

/**
 * Type guard validation that expression is CallExpressionNode
 * @param node
 */
export function isCallExpression(node: ExpressionNode): node is nodes.CallExpressionNode
{
	return node.kind == ExpressionKind.CallExpression;
}

/**
 * Type guard validation that expression is StringLiteralNode
 * @param node
 */
export function isStringLiteral(node: ExpressionNode): node is nodes.StringLiteralNode
{
	return node.kind == ExpressionKind.StringLiteral;
}

/**
 * Type guard validation that expression is NumericLiteralNode
 * @param node
 */
export function isNumericLiteral(node: ExpressionNode): node is nodes.NumericLiteralNode
{
	return node.kind == ExpressionKind.NumericLiteral;
}

/**
 * Type guard validation that expression is ParenthesizedExpressionNode
 * @param node
 */
export function isParenthesizedExpression(node: ExpressionNode): node is nodes.ParenthesizedExpressionNode
{
	return node.kind == ExpressionKind.ParenthesizedExpression;
}

