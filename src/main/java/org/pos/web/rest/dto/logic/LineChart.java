package org.pos.web.rest.dto.logic;

import java.math.BigDecimal;
import java.util.List;

public class LineChart {
	
	private String key;
	
	private BigDecimal x;
	
	private BigDecimal y;
	
	public LineChart() {
		
	}
	
	public LineChart(String key, BigDecimal x, BigDecimal y) {
		
	}
	
	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public BigDecimal getY() {
		return y;
	}

	public void setY(BigDecimal y) {
		this.y = y;
	}

	private List<BigDecimal> values;
}