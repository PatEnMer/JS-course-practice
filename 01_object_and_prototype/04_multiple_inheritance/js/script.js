function Shape(sideLengths) {
	this._name = '';
	this._sideLengths = sideLengths;
}

Shape.prototype.getPerimeter = function() {
	return this._sideLengths.reduce(function(prevVal, val) {
		return prevVal + val;
	});
};

// square or ractangle
Shape.prototype.getArea = function() {
	return this._sideLengths[0] * this._sideLengths[1];
};

function Rectangle(sideLengths) {
	Shape.call(this, [ sideLengths[0], sideLengths[1], sideLengths[0], sideLengths[1] ]);
	this._name = 'Prostokąt';
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

function Square(sideLength) {
	Rectangle.call(this, [ sideLength, sideLength ]);
	this._name = 'Kwadrat';
}

Square.prototype = Object.create(Rectangle.prototype);
Shape.prototype.constructor = Square;

function Triangle(sideLength) {
	Shape.call(this, [ sideLength, sideLength, sideLength ]);
	this._name = 'Trójkąt';
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.getArea = function() {
	let a = this._sideLength[0];
	return +(a * a * Math.sqrt(3) / 4).toFixed(2); //"+" konwertuje wynikowego z obiektu stringa na number - trick
};

Triangle.prototype = Shape.prototype;

// const shape1 = new Shape([ 20, 20, 20, 20 ]);
// const shape1 = new Rectangle([ 20, 10 ]);
// const shape1 = new Square(10);
const triangle = new Triangle(10);
const square = new Square(20);
const rectangle = new Rectangle([ 20, 10 ]);
