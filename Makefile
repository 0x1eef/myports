PORTSDIR=/usr/ports

install:
	@for dir in freebsd hardenedbsd; do \
		cd $$dir ; \
		for port in */*; do \
			if [ -d ${PORTSDIR}/$$port ]; then \
				echo "Replace $$port"; \
				rm -rf ${PORTSDIR}/$$port ; \
			else \
				echo "Install $$port"; \
			fi; \
			find $$port -type d -name work -exec rm -rf {} + ; \
			cp -R $$port/ ${PORTSDIR}/$$port/ ; \
		done; \
		cd .. ; \
	done
