import * as ts from "typescript";

export function isArrayTypeNode(node: ts.Node): node is ts.ArrayTypeNode {
	return node.kind === ts.SyntaxKind.ArrayType;
}

export function isConditionalTypeNode(
	node: ts.Node
): node is ts.ConditionalTypeNode {
	return node.kind === ts.SyntaxKind.ConditionalType;
}

export function isConstructorTypeNode(
	node: ts.Node
): node is ts.ConstructorTypeNode {
	return node.kind === ts.SyntaxKind.ConstructorType;
}

export function isFunctionTypeNode(node: ts.Node): node is ts.FunctionTypeNode {
	return node.kind === ts.SyntaxKind.FunctionType;
}

export function isImportTypeNode(node: ts.Node): node is ts.ImportTypeNode {
	return node.kind === ts.SyntaxKind.ImportType;
}

export function isIndexedAccessTypeNode(
	node: ts.Node
): node is ts.IndexedAccessTypeNode {
	return node.kind === ts.SyntaxKind.IndexedAccessType;
}

export function isInferTypeNode(node: ts.Node): node is ts.InferTypeNode {
	return node.kind === ts.SyntaxKind.InferType;
}

export function isIntersectionTypeNode(
	node: ts.Node
): node is ts.IntersectionTypeNode {
	return node.kind === ts.SyntaxKind.IntersectionType;
}

export function isJSDocAllType(node: ts.Node): node is ts.JSDocAllType {
	return node.kind === ts.SyntaxKind.JSDocAllType;
}

export function isJSDocFunctionType(
	node: ts.Node
): node is ts.JSDocFunctionType {
	return node.kind === ts.SyntaxKind.JSDocFunctionType;
}

export function isJSDocNamepathType(
	node: ts.Node
): node is ts.JSDocNamepathType {
	return node.kind === ts.SyntaxKind.JSDocNamepathType;
}

export function isJSDocNonNullableType(
	node: ts.Node
): node is ts.JSDocNonNullableType {
	return node.kind === ts.SyntaxKind.JSDocNonNullableType;
}

export function isJSDocNullableType(
	node: ts.Node
): node is ts.JSDocNullableType {
	return node.kind === ts.SyntaxKind.JSDocNullableType;
}

export function isJSDocOptionalType(
	node: ts.Node
): node is ts.JSDocOptionalType {
	return node.kind === ts.SyntaxKind.JSDocOptionalType;
}

export function isJSDocSignature(node: ts.Node): node is ts.JSDocSignature {
	return node.kind === ts.SyntaxKind.JSDocSignature;
}

export function isJSDocType(node: ts.Node): node is ts.JSDocType {
	return node.kind === ts.SyntaxKind.JSDoc;
}

export function isJSDocTypeExpression(
	node: ts.Node
): node is ts.JSDocTypeExpression {
	return node.kind === ts.SyntaxKind.JSDocTypeExpression;
}

export function isJSDocTypeLiteral(node: ts.Node): node is ts.JSDocTypeLiteral {
	return node.kind === ts.SyntaxKind.JSDocTypeLiteral;
}

export function isJSDocUnknownType(node: ts.Node): node is ts.JSDocUnknownType {
	return node.kind === ts.SyntaxKind.JSDocUnknownType;
}

export function isJSDocVariadicType(
	node: ts.Node
): node is ts.JSDocVariadicType {
	return node.kind === ts.SyntaxKind.JSDocVariadicType;
}

export function isLiteralTypeNode(node: ts.Node): node is ts.LiteralTypeNode {
	return node.kind === ts.SyntaxKind.LiteralType;
}

export function isMappedTypeNode(node: ts.Node): node is ts.MappedTypeNode {
	return node.kind === ts.SyntaxKind.MappedType;
}

export function isNamedTupleMember(node: ts.Node): node is ts.NamedTupleMember {
	return node.kind === ts.SyntaxKind.NamedTupleMember;
}

export function isOptionalTypeNode(node: ts.Node): node is ts.OptionalTypeNode {
	return node.kind === ts.SyntaxKind.OptionalType;
}

export function isParenthesizedTypeNode(
	node: ts.Node
): node is ts.ParenthesizedTypeNode {
	return node.kind === ts.SyntaxKind.ParenthesizedType;
}

export function isRestTypeNode(node: ts.Node): node is ts.RestTypeNode {
	return node.kind === ts.SyntaxKind.RestType;
}

export function isTemplateLiteralTypeNode(
	node: ts.Node
): node is ts.TemplateLiteralTypeNode {
	return node.kind === ts.SyntaxKind.TemplateLiteralType;
}

export function isTemplateLiteralTypeSpan(
	node: ts.Node
): node is ts.TemplateLiteralTypeSpan {
	return node.kind === ts.SyntaxKind.TemplateLiteralType;
}

export function isThisTypeNode(node: ts.Node): node is ts.ThisTypeNode {
	return node.kind === ts.SyntaxKind.ThisType;
}

export function isTupleTypeNode(node: ts.Node): node is ts.TupleTypeNode {
	return node.kind === ts.SyntaxKind.TupleType;
}

export function isTypeLiteralNode(node: ts.Node): node is ts.TypeLiteralNode {
	return node.kind === ts.SyntaxKind.TypeLiteral;
}

export function isTypeOperatorNode(node: ts.Node): node is ts.TypeOperatorNode {
	return node.kind === ts.SyntaxKind.TypeOperator;
}

export function isTypePredicateNode(
	node: ts.Node
): node is ts.TypePredicateNode {
	return node.kind === ts.SyntaxKind.TypePredicate;
}

export function isTypeQueryNode(node: ts.Node): node is ts.TypeQueryNode {
	return node.kind === ts.SyntaxKind.TypeQuery;
}

export function isTypeReferenceNode(
	node: ts.Node
): node is ts.TypeReferenceNode {
	return node.kind === ts.SyntaxKind.TypeReference;
}

export function isUnionTypeNode(node: ts.Node): node is ts.UnionTypeNode {
	return node.kind === ts.SyntaxKind.UnionType;
}