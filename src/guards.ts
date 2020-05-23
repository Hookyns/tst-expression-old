import * as types       from "../declarations";
import {ExpressionKind} from "./enums";

/**
 * Type guard validation that expression is IdentifierExpressionNode
 * @param node
 */
export function isIdentifierExpression(node: types.ExpressionNode): node is types.IdentifierExpressionNode
{
	return node.kind == ExpressionKind.Identifier;
}

/**
 * Type guard validation that expression is ArrowFunctionExpressionNode
 * @param node
 */
export function isArrowFunctionExpression(node: types.ExpressionNode): node is types.ArrowFunctionExpressionNode
{
	return node.kind == ExpressionKind.ArrowFunction;
}

/**
 * Type guard validation that expression is ParameterExpressionNode
 * @param node
 */
export function isParameterExpression(node: types.ExpressionNode): node is types.ParameterExpressionNode
{
	return node.kind == ExpressionKind.Parameter;
}

/**
 * Type guard validation that expression is PropertyAccessExpressionNode
 * @param node
 */
export function isPropertyAccessExpression(node: types.ExpressionNode): node is types.PropertyAccessExpressionNode
{
	return node.kind == ExpressionKind.PropertyAccessExpression;
}

/**
 * Type guard validation that expression is NonNullExpressionNode
 * @param node
 */
export function isNonNullExpression(node: types.ExpressionNode): node is types.NonNullExpressionNode
{
	return node.kind == ExpressionKind.NonNullExpression;
}

/**
 * Type guard validation that expression is BinaryExpressionNode
 * @param node
 */
export function isBinaryExpression(node: types.ExpressionNode): node is types.BinaryExpressionNode
{
	return node.kind == ExpressionKind.BinaryExpression;
}

/**
 * Type guard validation that expression is PrefixUnaryExpressionNode
 * @param node
 */
export function isPrefixUnaryExpression(node: types.ExpressionNode): node is types.PrefixUnaryExpressionNode
{
	return node.kind == ExpressionKind.PrefixUnaryExpression;
}

/**
 * Type guard validation that expression is CallExpressionNode
 * @param node
 */
export function isCallExpression(node: types.ExpressionNode): node is types.CallExpressionNode
{
	return node.kind == ExpressionKind.CallExpression;
}

/**
 * Type guard validation that expression is StringLiteralNode
 * @param node
 */
export function isStringLiteral(node: types.ExpressionNode): node is types.StringLiteralNode
{
	return node.kind == ExpressionKind.StringLiteral;
}

/**
 * Type guard validation that expression is NumericLiteralNode
 * @param node
 */
export function isNumericLiteral(node: types.ExpressionNode): node is types.NumericLiteralNode
{
	return node.kind == ExpressionKind.NumericLiteral;
}

